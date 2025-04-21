
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog - BetterHost</title>
        <meta name="description" content="Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost" />
        <meta property="og:title" content="Blog - BetterHost" />
        <meta property="og:description" content="Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://betterhost.gr/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "BetterHost Blog",
            "description": "Συμβουλές και ιδέες για τους Airbnb hosts από την ομάδα του BetterHost",
            "url": "https://betterhost.gr/blog"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden transition-all hover:shadow-md animate-fade-in">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{new Date(post.date).toLocaleDateString('el-GR')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-primary hover:underline"
                  >
                    Διάβασε περισσότερα
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
