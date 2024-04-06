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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {!noCancel && (
            <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
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
