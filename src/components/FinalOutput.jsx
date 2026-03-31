export default function FinalOutput({ output }) {
  return (
    <div className="bg-green-600 text-white p-6 mt-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Final Analysis</h2>
      <p className="text-sm">{output.summary}</p>

      <div className="mt-4">
        <h4 className="font-semibold">Citations:</h4>
        {output.citations.map((c, i) => (
          <p key={i} className="text-xs">
            {c.title} (p.{c.page})
          </p>
        ))}
      </div>
    </div>
  );
}