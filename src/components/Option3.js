import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgydkxizvydkathymrad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxneWRreGl6dnlka2F0aHltcmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMTU5ODAsImV4cCI6MTk5OTc5MTk4MH0.nj-_Ft-7vGi22FnKEEfCh8eH5Cd3KimkjyOxagZsvHg';
const bucketName = 'public/purchases';

const supabase = createClient(supabaseUrl, supabaseKey);

function Option3() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
        const { data } = await supabase
        .storage
        .from('purchases')
        .list('folder', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        })
        setFiles(data || []);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);

    try {
      const fileData = selectedFile;
      const fileName = selectedFile.name;

      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, fileData);
        console.log(data);

      if (error) {
        console.error('Error uploading file:', error);
      } else {
        await fetchFiles();
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setSelectedFile(null);
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      <h2>Files:</h2>
      {files.length === 0 ? (
        <p>No Files to Display</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <a
                href={supabase.storage
                  .from(bucketName)
                  .getPublicUrl(file.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Option3;
