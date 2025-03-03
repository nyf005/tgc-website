export interface ServiceSection {
  title: string;
  content: string | ServiceBulletPoint[];
}

export interface ServiceBulletPoint {
  title: string;
  description: string;
}

export interface ServiceDetail {
  title: string;
  introduction: string;
  approach: string;
  sections: ServiceSection[];
  deliverables: string[];
  successStory: {
    title?: string;
    content: string;
  };
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  learnMoreLabel?: string;
  slug?: string;
  fullDescription?: string | ServiceDetail;
}

export interface ServiceCategory {
  category: string;
  description: string;
  services: Service[];
}