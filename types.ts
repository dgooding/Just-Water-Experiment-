import React from 'react';

export type ViewState = 'home' | 'origins' | 'shop' | 'cult';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  features: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  isStreaming?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}