import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="flex flex-col items-center justify-start h-3/4">
      <h1 className="text-4xl sm:text-xl font-bold mt-4 mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent className="whitespace-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-2">
          <AccordionTrigger>Another question</AccordionTrigger>
          <AccordionContent className="whitespace-normal">
            Another answer that can be longer and will wrap to the next line
            when necessary.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-2">
          <AccordionTrigger>Another question</AccordionTrigger>
          <AccordionContent className="whitespace-normal">
            Another answer that can be longer and will wrap to the next line
            when necessary.
          </AccordionContent>
        </AccordionItem>
      </Accordion>{" "}
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-2">
          <AccordionTrigger>Another question</AccordionTrigger>
          <AccordionContent className="whitespace-normal">
            Another answer that can be longer and will wrap to the next line
            when necessary.
          </AccordionContent>
        </AccordionItem>
      </Accordion>{" "}
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-2">
          <AccordionTrigger>Another question</AccordionTrigger>
          <AccordionContent className="whitespace-normal">
            Another answer that can be longer and will wrap to the next line
            when necessary.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
