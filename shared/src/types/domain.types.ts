// Domain types
export interface DomainEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FileMetadata extends DomainEntity {
  name: string;
  path: string;
  size: number;
  mimeType: string;
  tags: string[];
}

export interface Bookshelf extends DomainEntity {
  name: string;
  description: string;
  files: string[];
}
