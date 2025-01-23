import { useRouter } from "next/navigation";

import { Icon } from "@/lib/Icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmOutOfStockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmOutOfStockModal({
  isOpen,
  onClose,
}: ConfirmOutOfStockModalProps) {
  const router = useRouter();

  const handleConfirm = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
         
          <DialogTitle className="flex gap-2 items-center">
            <Icon
              path={
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="#eab308"
                    d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"
                  ></path>
                </g>
              }
              size={24}
            />
            <p className="text-start">Confirmar compra con productos sin stock</p>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p>
            Algunos productos en tu carrito no están en stock. Si confirmas la
            compra, estos productos serán fabricados especialmente para ti, lo
            que puede aumentar el tiempo de entrega. ¿Deseas continuar con la
            compra?
          </p>
        </div>
        <DialogFooter className="mt-6 flex flex-col gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm}>Confirmar y continuar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
