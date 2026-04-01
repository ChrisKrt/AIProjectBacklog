export interface FileMetadata {
  id: string;
  name: string;
  path: string;
  size: number;
  lastModified: Date;
}

export interface StorageAdapter {
  listFiles(path: string): Promise<FileMetadata[]>;
  readFile(path: string): Promise<ArrayBuffer>;
  writeFile(path: string, data: ArrayBuffer): Promise<void>;
  deleteFile(path: string): Promise<void>;
}

export class CloudStorageAdapter implements StorageAdapter {
  async listFiles(_path: string): Promise<FileMetadata[]> {
    throw new Error('Cloud storage adapter not yet configured');
  }

  async readFile(_path: string): Promise<ArrayBuffer> {
    throw new Error('Cloud storage adapter not yet configured');
  }

  async writeFile(_path: string, _data: ArrayBuffer): Promise<void> {
    throw new Error('Cloud storage adapter not yet configured');
  }

  async deleteFile(_path: string): Promise<void> {
    throw new Error('Cloud storage adapter not yet configured');
  }
}
