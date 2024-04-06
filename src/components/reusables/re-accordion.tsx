import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface Props {
  data: {
    button: string
    content: string
  }[]
  buttonTwStyles?: string
  contentTwStyles?: string
  componentTwStyles?: string
  behaviour?: 'single' | 'multiple'
}

// Edit this for entire component
const defaultComponentTwStyles = 'w-full'
const defaultButtonTwStyles = ''
const defaultContentTwStyles = ''

const ReAccordion = ({
  data,
  buttonTwStyles = '',
  contentTwStyles = '',
  componentTwStyles = '',
  behaviour = 'single',
}: Props) => {
  return (
    <Accordion
      // type="single"
      // collapsible
      {...(behaviour === 'single'
        ? { type: 'single', collapsible: true }
        : { type: 'multiple' })}
      className={cn(defaultComponentTwStyles, componentTwStyles)}
    >
      {data.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={`acc${index}`}>
          <AccordionTrigger
            className={cn(defaultButtonTwStyles, buttonTwStyles)}
          >
            {item.button}
          </AccordionTrigger>
          <AccordionContent
            className={cn(defaultContentTwStyles, contentTwStyles)}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default ReAccordion

/* ______________________________NOTE________________________________
Add this to tsconfig for better transition
extend: {
    keyframes: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
            "0%": { opacity: 0 },  // <- Add this
            "100%": { opacity: 1 },  // <- Add this
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
            "0%": { opacity: 1 },  // <- Add this
            "100%": { opacity: 0 },  // <- Add this
        },
        },
        animation: { // increase duration if wanted
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
    },
},
*/
