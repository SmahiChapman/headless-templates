'use client';

import { useState, type ReactNode, type SVGProps } from 'react';
import { useWixClient } from '@app/hooks/useWixClient';

type RepresentativeType =
  'Representatives' | 'Senators' | 'Governors' | 'Mayors';

const COLLECTION_BY_TYPE: Record<RepresentativeType, string> = {
  Representatives: 'Import4',
  Senators: 'Import5',
  Governors: 'Import3',
  Mayors: 'Import2',
};

interface OfficialResult {
  _id?: string;
  [key: string]: unknown;
}

// Wix imports can use different field keys across collections.
// These aliases are fallbacks, not verified schemas for Import2/3/5.
function getField(item: OfficialResult, keys: string[]): string {
  for (const key of keys) {
    const value = item[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
    if (typeof value === 'number') return String(value);
  }
  return '';
}

function getOfficialName(item: OfficialResult): string {
  const first = getField(item, ['firstName', 'first_name', 'first']);
  const last = getField(item, ['lastName', 'last_name', 'last']);
  return (
    getField(item, [
      'name',
      'fullName',
      'full_name',
      'officialName',
      'representativeName',
      'senator',
      'senatorName',
      'governor',
      'governorName',
      'currentMayor',
      'mayorName',
      'Name',
      'NAME',
    ]) || [first, last].filter(Boolean).join(' ')
  );
}

function getOfficialPhone(item: OfficialResult): string {
  return getField(item, [
    'phone',
    'phoneNumber',
    'phone_number',
    'telephone',
    'contactPhone',
    'officePhone',
    'phone20222',
    'Phone',
    'PHONE',
  ]);
}

function getOfficialRegion(item: OfficialResult): string {
  return getField(item, [
    'title',
    'state',
    'State',
    'region',
    'district',
    'city',
    'City',
    'location',
  ]);
}

type IconProps = SVGProps<SVGSVGElement>;

function IconBuilding(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function IconGlobe(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function IconVideo(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function IconHeart(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconPhone(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconMail(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconFlag(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  );
}

function IconUsers(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconSearch(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function IconMapPin(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-7 w-1.5 shrink-0 rounded-full bg-indigo-600"
      />
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
        {children}
      </h2>
    </div>
  );
}

function CardHeading({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        {icon}
      </span>
      <h3 className="text-base font-semibold text-slate-900">{children}</h3>
    </div>
  );
}

export default function Home() {
  const wixClient = useWixClient();

  const [repType, setRepType] = useState<RepresentativeType>('Representatives');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<OfficialResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const getPlaceholderText = () => {
    switch (repType) {
      case 'Representatives':
        return 'Enter state or district (e.g., Alabama)...';
      case 'Senators':
        return 'Enter state (e.g., Alabama)...';
      case 'Governors':
        return 'Enter state (e.g., Alabama)...';
      case 'Mayors':
        return 'Enter city name...';
      default:
        return 'Enter state...';
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      // Querying the collection mapped to the selected representative type
      const response = await wixClient.items
        .query(COLLECTION_BY_TYPE[repType])
        .eq('title', searchTerm)
        .find();

      const items = (response.items || []) as OfficialResult[];
      // Inspect actual keys in the browser console if a card is still blank.
      if (items.length > 0) {
        console.info(
          `[Community to Council] ${repType} fields:`,
          Object.keys(items[0]),
        );
      }
      setResults(items);
    } catch (error) {
      console.error('Search Error:', error);
      setResults([]);
      alert('Search failed. Check your Wix permissions.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Search Header */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-indigo-50/70 via-white to-white py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-slate-200/50 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
              <IconBuilding className="h-6 w-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Connect with Your Representatives
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-6">
              Select an official type and enter your state or location to find
              contact information.
            </p>

            <div className="mx-auto mt-8 max-w-lg rounded-xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-md shadow-slate-200/60">
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  aria-label="Representative type"
                  value={repType}
                  onChange={(e) =>
                    setRepType(e.target.value as RepresentativeType)
                  }
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500/30 transition-colors duration-150 sm:w-44"
                >
                  <option value="Representatives">Representatives</option>
                  <option value="Senators">Senators</option>
                  <option value="Governors">Governors</option>
                  <option value="Mayors">Mayors</option>
                </select>

                <input
                  type="text"
                  placeholder={getPlaceholderText()}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/30 transition-colors duration-150"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />

                <button
                  onClick={handleSearch}
                  disabled={isLoading}
                  aria-busy={isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500/30 disabled:bg-slate-400 transition-colors duration-150 sm:w-auto min-w-[80px]"
                >
                  {isLoading && (
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
                      />
                    </svg>
                  )}
                  {isLoading ? 'Searching...' : 'Find'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="py-8 bg-slate-50" aria-live="polite">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading>Results ({results.length})</SectionHeading>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((item, index) => {
                  const name = getOfficialName(item);
                  const phone = getOfficialPhone(item);
                  const region = getOfficialRegion(item);
                  return (
                    <div
                      key={item._id ?? `result-${index}`}
                      className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition-shadow duration-150 hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
                          {(name || '?').charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-indigo-600 break-words">
                            {name}
                          </h3>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                            <IconPhone className="h-4 w-4 shrink-0 text-slate-400" />
                            Phone: {phone}
                          </p>
                          <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400 uppercase tracking-wide">
                            <IconMapPin className="h-3.5 w-3.5 shrink-0" />
                            Region: {region}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-white py-12 text-center shadow-sm">
                <IconSearch className="h-10 w-10 text-slate-300" />
                <p className="italic text-slate-500">
                  No results found for &quot;{searchTerm}&quot;.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Mission Statement */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200/80 border-l-4 border-l-indigo-600 bg-white p-4 sm:p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <IconFlag className="h-5 w-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                Our Mission
              </h2>
            </div>
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
          <SectionHeading>Know Your Rights</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition-shadow duration-150 hover:shadow-md">
              <CardHeading icon={<IconGlobe className="h-5 w-5" />}>
                Immigration Rights
              </CardHeading>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                <strong>The Scope:</strong> This zone covers the entire border
                with Mexico and Canada, but also the entire coastline. This
                means roughly two-thirds of the U.S. population lives within
                this area.
                <br />
                <br />
                <strong>Warrantless Searches:</strong> Border Patrol can set up
                interior checkpoints and conduct &quot;roving patrols,&quot; but
                they still generally need &quot;reasonable suspicion&quot; of an
                immigration violation or a crime to stop a vehicle.
                <br />
                <br />
                <strong>Your Rights:</strong> Even inside this zone, you still
                have the right to remain silent and the right to refuse consent
                for a search of your belongings or vehicle (though CBP may
                search your vehicle anyway if they claim probable cause).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition-shadow duration-150 hover:shadow-md">
              <CardHeading icon={<IconVideo className="h-5 w-5" />}>
                Getting Stopped by the Police
              </CardHeading>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                <strong>
                  Fundamental Rights <br /> The Right to Record:{' '}
                </strong>{' '}
                The First Amendment protects your right to take photos and
                videos of law enforcement (police, ICE, FBI, National Guard)
                performing their duties in public spaces like streets,
                sidewalks, and parks.
                <br />
                <br />
                <strong>Device Privacy:</strong> If you are not under arrest,
                officers need a warrant to confiscate or view the contents of
                your device. Even if you are arrested, they still generally need
                a warrant to search your phone’s data.
                <br />
                <br />
                <strong>No Deletion:</strong> Government officials are never
                permitted to delete your photographs or videos under any
                circumstances.
                <br />
                <br />
                <strong>
                  Best Practices While Recording <br /> Stay Clear:
                </strong>{' '}
                Do not interfere with or obstruct officers. They can lawfully
                order you to move a reasonable distance away to avoid
                interference.
                <br />
                <br />
                <strong>Be Open:</strong> Film openly and keep your hands
                visible. Avoid sudden movements that could be perceived as a
                threat.
                <br />
                <br />
                <strong>Capture Details:</strong> Aim to record badge numbers,
                names, patrol car numbers, and any weapons or documents
                involved.
                <br />
                <br />
                <strong>Preserve Evidence:</strong> Keep recordings continuous
                to show full context. Make copies immediately and do not edit
                the original files if you plan to use them as evidence.
                <br />
                <br />
                <strong>
                  Interactions & Digital Safety <br /> If Stopped:
                </strong>{' '}
                Ask, &quot;Am I free to go?&quot; If they say yes, walk away. If
                they say no, you are being detained, but you still have the
                right to remain silent.
                <br />
                <br />
                <strong>Digital Privacy:</strong> To better protect your data,
                the ACLU recommends turning off biometric unlocking
                (fingerprint/FaceID) and using a strong passcode instead.
                <br />
                <br />
                <strong>Obeying Orders:</strong> Even if you believe an order to
                move back is unlawful, it is often safer to comply while stating
                your compliance aloud (e.g., &quot;I am moving back now&quot;)
                and documenting the interaction to challenge it later.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition-shadow duration-150 hover:shadow-md">
              <CardHeading icon={<IconHeart className="h-5 w-5" />}>
                Disability Rights
              </CardHeading>
              <p className="text-sm sm:text-base text-slate-600 leading-6">
                <strong>Protection:</strong> Federal laws (like the ADA and
                Rehabilitation Act) protect individuals with disabilities from
                discrimination, segregation, and exclusion.
                <br />
                <br />
                <strong>Scope:</strong> These rights apply to employment,
                housing, public spaces, voting, and even within the carceral
                system.
                <br />
                <br />
                <strong>At Work:</strong> You have the right to reasonable
                accommodations to perform your job duties, provided they
                don&apos;t cause &quot;undue hardship&quot; for the employer.
                This includes the hiring process and digital applications.
                <br />
                <br />
                <strong>Housing:</strong> It is illegal for landlords to refuse
                to rent to you because of a disability. You can request
                reasonable modifications to the physical structure or
                &quot;reasonable accommodations&quot; to rules and policies.
                <br />
                <br />
                <strong>Public Spaces & Businesses:</strong> Private businesses
                that serve the public (restaurants, shops, etc.) and government
                buildings must be accessible and provide equal access to
                services.
                <br />
                <br />
                <strong>Voting:</strong> You are entitled to an accessible
                polling place and the right to receive assistance with voting if
                needed.
                <br />
                <br />
                <strong>Prison/Detention:</strong> People in prison retain their
                disability rights, including access to medical care, programs,
                and protection from discrimination or abuse based on their
                condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates and Tips */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>Communication Templates &amp; Tips</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-5 transition-shadow duration-150 hover:shadow-md">
              <div>
                <CardHeading icon={<IconPhone className="h-5 w-5" />}>
                  Phone Call Template
                </CardHeading>
                <p className="text-sm text-slate-500 mb-3">
                  Replace the bracketed text with your own information.
                </p>
                <div className="rounded-lg bg-slate-50 p-4 text-sm sm:text-base text-slate-700 leading-7 space-y-3">
                  <p>
                    Hello, I would like to make a comment to [elected official’s
                    name] about [problem or policy].
                  </p>
                  <p>
                    My name is [your full name], and I am a constituent living
                    in [city]. I am calling to urge [elected official’s name] to
                    support [specific action or legislation]. This matters to me
                    because [personal reason].
                  </p>
                  <p>
                    Could you share the official’s position on this issue and
                    how they plan to address it? Thank you for taking my
                    message.
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Source: Guide to Calling Your Legislators and Fact Sheet: How
                  to Call Your Elected Officials (n.d.).
                </p>
              </div>
              <div className="border-t border-slate-200/70 pt-4">
                <h4 className="text-base font-semibold text-slate-900 mb-3">
                  Tips for Effective Calls
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-600 leading-6">
                  <li>Be concise and state your main point early.</li>
                  <li>
                    Be polite; a staff member may be recording your concerns.
                  </li>
                  <li>
                    Explain the issue and the specific action you want taken.
                  </li>
                  <li>Share a brief personal experience when relevant.</li>
                  <li>Thank the staff member for their time.</li>
                  <li>
                    If you reach voicemail, leave a brief message with your
                    reason for calling and a clear request.
                  </li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  Source: Guide to Calling Your Legislators (n.d.).
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-5 transition-shadow duration-150 hover:shadow-md">
              <div>
                <CardHeading icon={<IconMail className="h-5 w-5" />}>
                  Email Template
                </CardHeading>
                <p className="text-sm text-slate-500 mb-3">
                  Customize this sample before sending it to your
                  representative.
                </p>
                <div className="rounded-lg bg-slate-50 p-4 text-sm sm:text-base text-slate-700 leading-7 space-y-3">
                  <p>Subject: Request for Support on [Bill Number or Issue]</p>
                  <p>Dear Senator or Representative [Last Name],</p>
                  <p>
                    As your constituent in [city or district], I am writing to
                    urge your support for [bill number or policy], which would
                    [describe its purpose]. I support this action because
                    [explain how it would affect you or your community].
                  </p>
                  <p>
                    I ask that you [co-sponsor, support, or take another
                    specific action]. Thank you for considering my views. I look
                    forward to your response.
                  </p>
                  <p>
                    Sincerely,
                    <br />
                    [Your Name]
                    <br />
                    [City or Mailing Address]
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Source: Benefits Protection Team Leader Tool Kit, Sample Email
                  to Elected Officials (n.d.).
                </p>
              </div>
              <div className="border-t border-slate-200/70 pt-4">
                <h4 className="text-base font-semibold text-slate-900 mb-3">
                  Tips for Effective Emails
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-600 leading-6">
                  <li>
                    Write in your own words; use templates as a starting point.
                  </li>
                  <li>
                    Keep the email brief, ideally no longer than one page.
                  </li>
                  <li>
                    Identify yourself and your issue in the opening paragraph.
                  </li>
                  <li>Explain how the issue affects you or your community.</li>
                  <li>Limit your message to your three strongest points.</li>
                  <li>Use respectful language, even when you disagree.</li>
                  <li>
                    Address the official appropriately and include your
                    location.
                  </li>
                  <li>
                    Follow up respectfully after the official takes action.
                  </li>
                </ol>
                <p className="mt-2 text-xs text-slate-500">
                  Source: Silva, Tips for Effective Emails (n.d.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-8 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200/80 border-l-4 border-l-indigo-600 bg-white p-4 sm:p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <IconUsers className="h-5 w-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                About Us
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-7">
              As college students and new voters, we know firsthand how
              difficult it can be to find reliable information and understand
              where to turn with questions about government. With information
              spreading instantly across many forms of media, misinformation and
              miscommunication can make civic participation feel overwhelming.
              We created Community to Council to bring together clear, unbiased
              information, representative contacts, and practical communication
              tools so that more people can make informed decisions and feel
              confident using their voices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
