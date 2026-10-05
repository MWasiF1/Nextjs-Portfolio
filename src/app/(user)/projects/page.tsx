import CaseStudiesSection from '@/src/components/sections/CaseStudiesSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Projects',
    description:
      'Case studies by Muhammad Wasif: Raast QR Payment on Delivery, a BNPL and lending platform serving 1,000+ merchants, and distributed observability across 6 microservices at PostEx.',
    path: '/projects'
  });
}

const Projects = () => <CaseStudiesSection />;

export default Projects;
