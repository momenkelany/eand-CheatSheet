import { useState, useMemo } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CimCard from "../components/CimCard";
import DeviceCareCard from "../components/DeviceCareCard";
import InfohubCard from "../components/InfohubCard";
import ScenariosCard from "../components/ScenariosCard";
import CodesCard from "../components/CodesCard";
import StartupToolsCard from "../components/StartupToolsCard";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ui/scroll-to-top";
import { details, topics, articles, startupTools, scenarios, codesNumbers } from "../data/knowledge-base";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDetails = useMemo(() => {
    if (!searchQuery.trim()) return details;
    
    const query = searchQuery.toLowerCase();
    return details.filter((item: string) => {
      const [title, description] = (item as string).split(": ");
      return (
        title.toLowerCase().includes(query) ||
        description?.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics;
    
    const query = searchQuery.toLowerCase();
    return topics.filter((topic: { title: string; content: string[] }) => {
      return (
        topic.title.toLowerCase().includes(query) ||
        topic.content.some((item: string) => item.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles;
    
    const query = searchQuery.toLowerCase();
    return articles.filter((article: { title: string; content: string[] }) => {
      return (
        article.title.toLowerCase().includes(query) ||
        article.content.some((item: string) => item.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const filteredStartupTools = useMemo(() => {
    if (!searchQuery.trim()) return startupTools;
    
    const query = searchQuery.toLowerCase();
    return startupTools.filter((tool: { title: string; content: string[] }) => {
      return (
        tool.title.toLowerCase().includes(query) ||
        tool.content.some((item: string) => item.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const filteredScenarios = useMemo(() => {
    if (!searchQuery.trim()) return scenarios;
    const query = searchQuery.toLowerCase();
    return scenarios.filter((s: { title: string; content: string[] }) => {
      return (
        s.title.toLowerCase().includes(query) ||
        s.content.some((item: string) => item.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const filteredCodesNumbers = useMemo(() => {
    if (!searchQuery.trim()) return codesNumbers;
    const query = searchQuery.toLowerCase();
    return codesNumbers.filter((item: string) => {
      const [title, value] = item.split(": ");
      return (
        title.toLowerCase().includes(query) ||
        value?.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-background/95">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search details..."
          />
        </div>

        <section id="CIM" className="mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-section-details-title"
            >
             🌐 CIM Shortcuts
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-section-details-subtitle">
              Click on any item to expand and view detailed information
            </p>
          </div>
          
          {filteredDetails.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDetails.map((item: string, index: number) => {
                const [title, description] = item.split(": ");
                return (
                  <CimCard
                    key={index}
                    title={title}
                    description={description || ""}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-no-details-found">
              No details found matching your search.
            </div>
          )}
        </section>

        <section id="DeviceCare" className="mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-section-topics-title"
            >
            📱 Device Care Topics to Explore
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-section-topics-subtitle">
              Click on any topic to expand and learn more
            </p>
          </div>
          
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredTopics.map((topic: { title: string; content: string[] }, index: number) => (
                <DeviceCareCard
                  key={index}
                  title={topic.title}
                  content={topic.content}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-no-topics-found">
              No topics found matching your search.
            </div>
          )}
        </section>

        <section id="InfoHub" className="mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-section-articles-title"
            >
            📚 InfoHub Articles
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-section-articles-subtitle">
              Explore InfoHub Articles and guides
            </p>
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredArticles.map((article: { title: string; content: string[] }, index: number) => (
                <InfohubCard
                  key={index}
                  title={article.title}
                  content={article.content}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-no-articles-found">
              No articles found matching your search.
            </div>
          )}
        </section>

        <section id="Scenarios" className="mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-section-scenarios-title"
            >
              🎭 Scenarios
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-section-scenarios-subtitle">
              Common scenarios and their step-by-step flows
            </p>
          </div>
          {filteredScenarios.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredScenarios.map((scenario: { title: string; content: string[] }, index: number) => (
                <ScenariosCard key={index} title={scenario.title} content={scenario.content} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-no-scenarios-found">
              No scenarios found matching your search.
            </div>
          )}
        </section>

        <section id="CodesAndNumbers" className="mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-section-codes-title"
            >
              🔢 Codes & Numbers
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-section-codes-subtitle">
              Common shortcodes, IVR, and support numbers
            </p>
          </div>
          {filteredCodesNumbers.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCodesNumbers.map((item: string, index: number) => {
                const [title, value] = item.split(": ");
                return (
                  <CodesCard key={index} title={title} description={value || ""} />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-no-codes-found">
              No Codes & Numbers found matching your search.
            </div>
          )}
        </section>

        <section id="StartupTools" className="mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-section-startup-tools-title"
            >
              🚀 Startup Tools
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-section-startup-tools-subtitle">
              Quick access to essential startup resources and tools
            </p>
          </div>
          
          {filteredStartupTools.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredStartupTools.map((tool: { title: string; content: string[] }, index: number) => (
                <StartupToolsCard
                  key={index}
                  title={tool.title}
                  content={tool.content}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground" data-testid="text-no-startup-tools-found">
              No startup tools found matching your search.
            </div>
          )}
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
