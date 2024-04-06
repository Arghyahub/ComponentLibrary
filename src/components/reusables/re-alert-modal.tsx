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
const defaultComponentTwStyles =
  'max-w-[95%] sm:max-w-lg dark:bg-white rounded-sm .light'
const defaultFooterTwStyles = 'flex flex-row gap-2 justify-end items-center'
const defaultCancelTwStyles =
  'text-black dark:hover:text-black dark:text-black mt-0 dark:bg-white dark:ring-offset-white dark:hover:bg-[#F1F1F5] dark:border-slate-200'
const defaultPrimaryTwStyles =
  'dark:bg-slate-900 dark:text-[#F8FAFC] dark:hover:bg-[#0F172AE6]'
const defaultTitleTwStyles = 'text-start'
const defaultContentTwStyles = 'text-start dark:text-[#64748B]'

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
          <AlertDialogAction
            className={cn(defaultPrimaryTwStyles)}
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
