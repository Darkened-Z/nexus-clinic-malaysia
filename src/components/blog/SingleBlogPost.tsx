'use client';
import { useEffect, useRef } from 'react';
import { FAQItem } from '@/src/utils/faqExtractor'; 
interface SingleBlogPostProps {
  content: string;
  postSlug?: string;

}

export function SingleBlogPost({ content, postSlug }: SingleBlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const processImages = () => {
      const container = contentRef.current;
      if (!container) return;

      // Handle VC Row sections (grid layouts)
      const sections = container.querySelectorAll('.vc_row');
      
      sections.forEach(section => {
        const columns = section.querySelectorAll('.wpb_column');
        
        if (columns.length > 1) {
          // This is a grid section - style it as a grid
          const rowContainer = section.querySelector('.ld-container');
          const row = section.querySelector('.row');
          
          if (row) {
            row.classList.add(
              'grid',
              'grid-cols-2',
              'md:grid-cols-3',
              'lg:grid-cols-6',
              'gap-4',
              'my-8'
            );
          }
          
          columns.forEach((column, index) => {
            // Style each column
            column.classList.add(
              'flex',
              'flex-col',
              'items-center',
              'text-center',
              'p-2'
            );
            
            const img = column.querySelector('img');
            const figure = column.querySelector('figure');
            const heading = column.querySelector('.ld-fancy-heading');
            
            if (img) {
              img.classList.add(
                'w-full',
                'h-[150px]',
                'md:h-[180px]',
                'object-cover',
                'rounded-xl',
                'shadow-md',
                'transition-all',
                'duration-300',
                'hover:shadow-xl',
                'hover:scale-105',
                
              );
              img.loading = 'lazy';
              if (!img.alt || img.alt.trim() === '') {
                img.alt = 'Nexus Clinic treatment image';
              }
            }
            
            if (figure) {
              figure.classList.add(
                'my-2',
                'relative',
                'rounded-xl',
                'overflow-hidden',
                'shadow-md',
                'w-full'
              );
            }
            
            if (heading) {
              heading.classList.add(
                'text-center',
                'mt-2',
                'text-brown',
                'font-medium',
                'w-full'
              );
              
              const words = heading.querySelectorAll('.split-unit');
              words.forEach(word => {
                word.classList.add(
                  'inline-block',
                  'text-xs',
                  'md:text-sm',
                  'text-[#8c4f58]',
                  'mx-0.5',
                  'font-semibold'
                );
              });
            }

            // Add a subtle animation delay for each card
            (column as HTMLElement).style.animationDelay = `${index * 0.1}s`;
            column.classList.add(
              'opacity-0',
              'animate-fadeInUp'
            );
          });
        }
      });

      // Handle standalone images (not in vc_row)
      const standaloneImages = container.querySelectorAll('img:not(.vc_row img)');
      if (standaloneImages.length === 0) return;

      // Convert NodeList to array for easier manipulation
      const imagesArray = Array.from(standaloneImages) as HTMLImageElement[];
      
      // Group consecutive standalone images
      const imageGroups: HTMLImageElement[][] = [];
      let currentGroup: HTMLImageElement[] = [];
      let lastParent: Element | null = null;

      imagesArray.forEach((img) => {
        const currentParent = img.parentElement;
        
        if (currentParent !== lastParent || currentGroup.length >= 2) {
          if (currentGroup.length > 0) {
            imageGroups.push([...currentGroup]);
          }
          currentGroup = [img];
          lastParent = currentParent;
        } else {
          currentGroup.push(img);
        }
      });

      if (currentGroup.length > 0) {
        imageGroups.push(currentGroup);
      }

      // Process standalone image groups
      imageGroups.forEach((group) => {
        if (group.length === 1) {
          const img = group[0];
          img.loading = 'lazy';
          if (!img.alt || img.alt.trim() === '') {
            img.alt = 'Nexus Clinic treatment image';
          }
          img.classList.add(
            'w-full',
            'h-auto',
            'rounded-2xl',
            'shadow-xl',
            'transition-transform',
            'duration-500',
            'hover:scale-102',
            'my-8'
          );

          if (img.parentElement?.tagName !== 'FIGURE') {
            const figure = document.createElement('figure');
            figure.className = 'my-8 relative rounded-2xl overflow-hidden shadow-xl';
            
            if (img.parentNode) {
              img.parentNode.insertBefore(figure, img);
              figure.appendChild(img);
            }
          }
        } else {
          // Create gallery for multiple standalone images
          const firstImg = group[0];
          const parentNode = firstImg.parentNode;
          
          const galleryContainer = document.createElement('div');
          galleryContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 my-8';

          group.forEach((img, index) => {
            img.loading = 'lazy';
            img.classList.add(
              'w-full',
              'h-[250px]',
              'object-cover',
              'rounded-xl',
              'shadow-lg',
              'transition-transform',
              'duration-500',
              'hover:scale-105'
            );
            
            let figure: HTMLElement;
            if (img.parentElement?.tagName === 'FIGURE') {
              figure = img.parentElement;
              figure.className = 'relative overflow-hidden rounded-xl group h-full';
            } else {
              figure = document.createElement('figure');
              figure.className = 'relative overflow-hidden rounded-xl group h-full';
              
              if (img.parentNode) {
                img.parentNode.insertBefore(figure, img);
                figure.appendChild(img);
              }
            }
            
            // Add animation delay
            (figure as HTMLElement).style.animationDelay = `${index * 0.2}s`;
            figure.classList.add('opacity-0', 'animate-fadeInUp');
            
            if (img.alt && !figure.querySelector('figcaption')) {
              const figcaption = document.createElement('figcaption');
              figcaption.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300';
              figcaption.textContent = img.alt;
              figure.appendChild(figcaption);
            }
            
            galleryContainer.appendChild(figure);
          });
          
          if (parentNode && firstImg.parentNode) {
            parentNode.insertBefore(galleryContainer, firstImg);
            
            group.forEach((img) => {
              if (img.parentNode) {
                img.parentNode.removeChild(img);
              }
            });
          }
        }
      });
    };

    const addAnimationStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `;
      document.head.appendChild(style);
    };

    const processHeadings = () => {
      const headings = contentRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6');
      if (!headings) return;
      
      headings.forEach(heading => {
        const text = heading.textContent || '';
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
        
        const level = parseInt(heading.tagName[1]);
        
        heading.className = '';
        
        const baseClasses = 'font-serif font-bold scroll-mt-24';
        
        switch(level) {
          case 1:
            heading.classList.add(...baseClasses.split(' '), 'text-4xl', 'lg:text-5xl', 'mt-12', 'mb-6', 'text-brown');
            break;
          case 2:
            heading.classList.add(...baseClasses.split(' '), 'text-3xl', 'lg:text-4xl', 'mt-10', 'mb-4', 'text-[#8c4f58]', 'relative', 'pl-6');
            
            if (!heading.querySelector('.heading-decoration')) {
              const decoration = document.createElement('span');
              decoration.className = 'heading-decoration absolute left-0 top-1/2 w-1 h-8 bg-rose rounded-full transform -translate-y-1/2';
              decoration.setAttribute('aria-hidden', 'true');
              heading.appendChild(decoration);
            }
            break;
          case 3:
            heading.classList.add(...baseClasses.split(' '), 'text-2xl', 'lg:text-3xl', 'mt-8', 'mb-3', 'text-brown');
            break;
          case 4:
            heading.classList.add(...baseClasses.split(' '), 'text-xl', 'lg:text-2xl', 'mt-6', 'mb-2', 'text-[#8c4f58]/80');
            break;
          default:
            heading.classList.add(...baseClasses.split(' '), 'text-lg', 'mt-4', 'mb-2', 'text-brown/80');
        }
      });
    };

    const processFancyHeadings = () => {
      const fancyHeadings = contentRef.current?.querySelectorAll('.ld-fancy-heading');
      
      fancyHeadings?.forEach(heading => {
        heading.classList.add(
          'text-center',
          'mt-2',
          'mb-4',
          'text-brown',
          'font-medium'
        );
        
        const words = heading.querySelectorAll('.split-unit');
        words.forEach(word => {
          word.classList.add(
            'inline-block',
            'text-sm',
            'md:text-base',
            'text-[#8c4f58]',
            'mx-0.5'
          );
        });
      });
    };

    const processLists = () => {
      const lists = contentRef.current?.querySelectorAll('ul, ol');
      if (!lists) return;
      
      lists.forEach(list => {
        const parentElement = list.parentElement;
        const isAlreadyStyled = parentElement?.classList.contains('list-container');
        
        if (!isAlreadyStyled && list.tagName === 'UL') {
          const container = document.createElement('div');
          container.className = 'list-container my-6 bg-cream/30 rounded-xl p-1';
          
          if (list.parentNode) {
            list.parentNode.insertBefore(container, list);
            container.appendChild(list);
          }
        }
        
        if (list.tagName === 'UL') {
          list.classList.add('space-y-3');
          
          const items = list.querySelectorAll('li');
          items.forEach((item, index) => {
            if (!item.querySelector('.list-bullet')) {
              const content = item.innerHTML;
              
              const bulletSpan = document.createElement('span');
              bulletSpan.className = 'list-bullet inline-block w-2 h-2 mt-2.5 rounded-full bg-rose flex-shrink-0';
              bulletSpan.setAttribute('aria-hidden', 'true');
              
              const contentSpan = document.createElement('span');
              contentSpan.className = 'flex-1 text-brown/90 leading-relaxed';
              contentSpan.innerHTML = content;
              
              item.innerHTML = '';
              item.className = 'flex items-start gap-3';
              item.appendChild(bulletSpan);
              item.appendChild(contentSpan);
              
              const bold = contentSpan.querySelector('strong, b');
              if (bold) {
                bold.classList.add('text-wine', 'font-semibold');
              }
            }
            
            if (index % 2 === 1) {
              item.classList.add('bg-rose/5', 'p-2', 'rounded-lg');
            }
          });
        } else {
          list.classList.add('space-y-3', 'list-decimal', 'pl-6');
          
          const items = list.querySelectorAll('li');
          items.forEach((item, index) => {
            item.classList.add('text-brown/90', 'leading-relaxed', 'pl-2');
            
            const bold = item.querySelector('strong, b');
            if (bold) {
              bold.classList.add('text-wine', 'font-semibold');
            }
            
            if (index % 2 === 1) {
              item.classList.add('bg-rose/5', 'p-2', 'rounded-lg');
            }
          });
        }
      });
    };

    const processParagraphs = () => {
      const paragraphs = contentRef.current?.querySelectorAll('p');
      if (!paragraphs) return;
      
      paragraphs.forEach((p, index) => {
        if (p.closest('.ld-fancy-heading') || p.closest('.wpb_column')) return;
        
        p.classList.add(
          'text-brown/90',
          'leading-relaxed',
          'text-lg',
          'mx-auto'
        );
        
        const links = p.querySelectorAll('a');
        links.forEach(link => {
          link.classList.add(
            'text-wine',
            'hover:text-brown',
            'underline',
            'underline-offset-4',
            'decoration-2',
            'decoration-rose/30',
            'hover:decoration-rose',
            'transition-all',
            'duration-200',
            'font-medium'
          );
          const href = link.getAttribute('href') || '';
          const isInternal =
            href.includes('nexus-clinic.com') ||
            href.startsWith('/') ||
            href.startsWith('#');
          if (!isInternal) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
        });
        
        if (index === 0 && p.textContent && p.textContent.length > 0) {
          p.classList.add(
            'first-letter:text-6xl',
            'first-letter:font-serif',
            'first-letter:text-wine',
            'first-letter:float-left',
            'first-letter:mr-3',
            'first-letter:mt-2'
          );
        }
      });
    };
    
    addAnimationStyles();
    processImages();
    processHeadings();
    processFancyHeadings();
    processLists();
    processParagraphs();

    // Rewrite blog.nexus-clinic.com links to point to the main domain
    const processLinks = () => {
      const container = contentRef.current;
      if (!container) return;
      const links = container.querySelectorAll('a[href]');
      links.forEach((link) => {
        const href = link.getAttribute('href') || '';
        if (href.includes('blog.nexus-clinic.com')) {
          try {
            const url = new URL(href);
            const pathname = url.pathname.replace(/^\//, '').replace(/\/$/, '');
            const newHref = pathname ? `/blogs/${pathname}` : '/blogs';
            link.setAttribute('href', newHref);
            // Internal link — remove _blank
            link.removeAttribute('target');
            link.removeAttribute('rel');
          } catch {
            // Not a valid URL, skip
          }
        }
      });
    };
    processLinks();
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="single-post max-w-7xl mx-auto px-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}