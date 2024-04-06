import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  content: string
  primaryBtnText: string
  primaryBtnAction?: () => void
  cancelBtnAction?: () => void
  noCancel?: boolean
  autoClose?: boolean
}

// Default styles edit here
const defaultComponentTwStyles = 'max-w-[95%]'
const defaultFooterTwStyles = 'flex flex-row gap-2 justify-end items-center'
const defaultCancelTwStyles = 'mt-0'
const defaultPrimaryTwStyles = ''
const defaultTitleTwStyles = 'text-start'
const defaultContentTwStyles = 'text-start'

const ReModal = ({
  open = false,
  setOpen,
  title = '',
  content = '',
  primaryBtnText = '',
  primaryBtnAction,
  cancelBtnAction,
  noCancel = false,
  autoClose = true,
}: Props) => {
  const handleClose = () => {
    if (cancelBtnAction) cancelBtnAction()
    if (autoClose) setOpen(false)
  }
  const handlePrimaryAction = () => {
    if (primaryBtnAction) primaryBtnAction()
    if (autoClose) setOpen(false)
  }

  return (
    <AlertDialog open={open}>
      {/* <AlertDialogTrigger asChild>
        <button>{button}</button>
      </AlertDialogTrigger> */}
      <AlertDialogContent className={cn(defaultComponentTwStyles)}>
        <AlertDialogHeader>
          <AlertDialogTitle className={cn(defaultTitleTwStyles)}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className={cn(defaultContentTwStyles)}>
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={cn(defaultFooterTwStyles)}>
          {!noCancel && (
            <AlertDialogCancel
              onClick={handleClose}
              className={cn(defaultCancelTwStyles)}
            >
              Cancel
            </AlertDialogCancel>
          )}
          <AlertDialogAction onClick={handlePrimaryAction}>
            {primaryBtnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ReModal
