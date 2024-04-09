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
  ComponentTwStyles?: string
  FooterTwStyles?: string
  CancelTwStyles?: string
  PrimaryTwStyles?: string
  TitleTwStyles?: string
  ContentTwStyles?: string
}

// Default styles edit here
const defaultComponentTwStyles = 'max-w-[90%] sm:max-w-lg rounded-sm .light'
const defaultFooterTwStyles = 'flex flex-row gap-2 justify-end items-center'
const defaultCancelTwStyles = 'text-black mt-0'
const defaultPrimaryTwStyles = ''
const defaultTitleTwStyles = 'text-start'
const defaultContentTwStyles = 'text-start'

const ReModal = ({
  open = false,
  setOpen,
  title = '',
  content = '',
  primaryBtnText = 'Continue',
  primaryBtnAction,
  cancelBtnAction,
  noCancel = false,
  autoClose = true,
  ComponentTwStyles = '',
  FooterTwStyles = '',
  CancelTwStyles = '',
  PrimaryTwStyles = '',
  TitleTwStyles = '',
  ContentTwStyles = '',
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
      <AlertDialogContent
        className={cn(defaultComponentTwStyles, ComponentTwStyles)}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className={cn(defaultTitleTwStyles, TitleTwStyles)}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription
            className={cn(defaultContentTwStyles, ContentTwStyles)}
          >
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter
          className={cn(defaultFooterTwStyles, FooterTwStyles)}
        >
          {!noCancel && (
            <AlertDialogCancel
              onClick={handleClose}
              className={cn(defaultCancelTwStyles, CancelTwStyles)}
            >
              Cancel
            </AlertDialogCancel>
          )}
          <AlertDialogAction
            className={cn(defaultPrimaryTwStyles, PrimaryTwStyles)}
            onClick={handlePrimaryAction}
          >
            {primaryBtnText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ReModal
