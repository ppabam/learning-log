"use client";

import { getAuthHeaders } from '@/lib/utils'

export const Form = () => {
  return (
    <input
      type="file"
      name="+"
      onChange={async (e) => {
        if (e.target.files) {
          const formData = new FormData();
          Object.values(e.target.files).forEach((file) => {
            formData.append("file", file);
          });

          const response = await fetch("/api/flags/upload", {
            method: "POST",
            headers: getAuthHeaders(),
            body: formData,
          });

          const result = await response.json();
          if (result.success) {
            alert("Upload ok : " + result.name);
          } else {
            alert("Upload failed");
          }
        }
      }}
    />
  );
};