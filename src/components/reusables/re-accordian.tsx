import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Props {
  data: {
    button: string;
    content: string;
  }[];
}

const ReAccordian = ({ data }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={`acc${index}`}>
          <AccordionTrigger>{item.button}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem value="item-1">
        <AccordionTrigger className={cn("bg-red-500", "text-blue-300")}>
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ReAccordian;
