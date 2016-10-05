// Load system modules

// Load modules

// Load my modules

// Constant declaration

// Module variables declaration

// Module interfaces declaration
export interface Options {
  useField?: boolean;
  field?: string;
}
export interface Post {
  id: string;
  text: string;
  date: Date;
  timestamp: number;
  author: string;
  authorId: string;
  tags?: string[];
  raw?: any;

  // Location can be null
  location?: GeoJSON.Point;

  // By index
  [ key:string ]: any,
}
export interface Wrapper {
  ( data: any ): Post;
}

// Module functions declaration

// Module class declaration

// Module namespaces

// Module initialization (at first load)

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
