import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface OutOfStockModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OutOfStockModal({ isOpen, onClose }: OutOfStockModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700">
        <DialogHeader>
          <DialogTitle>Productos sin stock</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p>
            Actualmente tiene productos en el carro que no están en stock. Podemos fabricarlos especialmente para ti.
            Por favor, ten en cuenta que el tiempo de entrega será mayor debido al proceso de producción. ¡Gracias por
            tu paciencia y comprensión!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

