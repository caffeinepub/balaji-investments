const TEAM_PLACEHOLDERS = [
  "member-1",
  "member-2",
  "member-3",
  "member-4",
  "member-5",
  "member-6",
  "member-7",
  "member-8",
  "member-9",
];

export function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-3 text-gray-500 text-lg">
            The people behind Balaji Finmart LLP
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {TEAM_PLACEHOLDERS.map((id) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm bg-gray-50"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Team member placeholder"
                >
                  <title>Team member placeholder</title>
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Team Member
              </h3>
              <p className="text-sm text-gray-400 mt-1">Role / Designation</p>
              <p className="text-sm text-gray-400 mt-2">
                Description coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
