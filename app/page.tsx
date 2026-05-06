'use client';

import { useState } from 'react';
import { useWixClient } from '@app/hooks/useWixClient';

export default function Home() {
  const wixClient = useWixClient();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      // Querying the collection
      const response = await wixClient.items
        .query('Import4')
        .eq('title', searchTerm)
        .find();

      setResults(response.items || []);
    } catch (error) {
      console.error('Search Error:', error);
      alert('Search failed. Check your Wix permissions.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Connect with Your Representatives
            </h1>
            <p className="text-slate-600">
              Enter your full state name (e.g., Alabama)
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter state..."
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:bg-slate-400"
              >
                {isLoading ? 'Searching...' : 'Find'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {hasSearched && (
        <section className="py-8 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-lg font-medium text-slate-900 mb-4">
              Results ({results.length})
            </h2>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((item) => (
                  <div
                    key={item._id}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    {/* Updated these lines to remove .data */}
                    <h3 className="text-indigo-600 font-bold">
                      {item.name || 'No Name Found'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Phone: {item.phone || 'N/A'}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-2 uppercase">
                      Region: {item.title}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 italic py-10">
                No results found for &quot;{searchTerm}&quot;.
              </div>
            )}
          </div>
        </section>
      )}

      {/* Mission Statement */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-6">
              Our mission is to empower college students and first-time voters
              to engage meaningfully with local government by making civic
              action simple, accessible, and effective.
              <br />
              <br />
              We bridge the gap between curiosity and action by connecting young
              adults with their elected representatives, equipping them with
              ready-to-use advocacy templates tailored to the issues they care
              about most, and educating them on the state and federal rights
              they already hold.
              <br />
              <br />
              This project aims to show people that their voices matter and that
              stronger connections within a community make the community itself
              stronger.
            </p>
          </div>
        </div>
      </section>

      {/* Know Your Rights */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Know Your Rights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Right to Petition
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                Placeholder
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Freedom of Speech
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                Placeholder
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm font-medium text-slate-700 mb-2">
                Right to Assembly
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates and Tips */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Communication Templates & Tips
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Phone Call Tips */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2">
                  Phone Call Templates
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
              <div className="border-t border-slate-200/70 pt-4">
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Tips for Effective Calls
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
            </div>

            {/* Email Tips */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2">
                  Email Templates
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
              <div className="border-t border-slate-200/70 pt-4">
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Tips for Effective Emails
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-6">
                  Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-8 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-4">
              About Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-6">
              Placeholder
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
