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
