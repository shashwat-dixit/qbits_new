import Card from "../components/Card";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://qcgqpcamvqaekgxkyzwl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjZ3FwY2FtdnFhZWtneGt5endsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjI4ODAsImV4cCI6MjAxMTk5ODg4MH0.w5C6g56lkEmBvKRjT5g3kqRtVE0g51ZSrYKJMAUEX2Y"
);

const fetchCards = async () => {
  const { data, error } = await supabase.from("qbits_members").select("*");
  if (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};

const mapDataToCardProps = async () => {
  // Fetch data from your data source (e.g., Supabase)
  const data = await fetchCards(); // Implement the fetchCards function as shown previously

  // Map the fetched data to the card props
  const cards = data.map((cardData) => {
    return {
      id: cardData.id,
      title: cardData.title,
      designation: cardData.designation,
      imageSrc: cardData.photo_url, // Assuming your data contains an "imageSrc" property
      linkedinUrl: cardData.linkedin_url, // Assuming your data contains a "linkedinUrl" property
      // Add more properties as needed
    };
  });

  return cards;
};

export default async function Page() {
  const cards = await mapDataToCardProps(); // Fetch and map data as shown above
  return (
    <div>
      <h1>Hi, This is the Teams page!</h1>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
