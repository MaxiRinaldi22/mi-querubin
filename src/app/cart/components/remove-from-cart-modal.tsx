import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface RemoveFromCartModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  productName: string
}

export function RemoveFromCartModal({ isOpen, onClose, onConfirm, productName }: RemoveFromCartModalProps) {  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Eliminar producto del carrito</DialogTitle>
          <DialogDescription className="text-lg font-medium">Estas seguro que quieres eliminar {productName} de tu carrito?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex w-full justify-end items-center flex-row gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Eliminar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

