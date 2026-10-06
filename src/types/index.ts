export interface CustomerReference {
  name: string;
  tagline: string;
  category: string;
  badge: string;
}

export interface TechnicalDocument {
  id: string;
  code: string;
  title: string;
  type: 'PDS' | 'SDS' | 'Test Report' | 'Protocol';
  size: string;
  pages: string;
  description: string;
  variant?: '100' | '200' | '50' | 'All';
  verifiedCompliance: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  subtitle: string;
  codeNumber: string;
  applicationState: string;
  dielectricRating: string;
  dielectricNote: string;
  flammability: string;
  flammabilityClass: 'combustible' | 'non-flammable' | 'power-off-caution';
  evaporationRate: string;
  residue: string;
  primaryTarget: string;
  keyFeatures: string[];
  safetyProtocol: string;
  badgeColor: string;
  powerOffOnly?: boolean;
}
