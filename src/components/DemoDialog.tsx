
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-md md:max-w-lg rounded-2xl p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Request a construction demo</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us who you are and which part of the platform you’d like to see.
          </DialogDescription>
        </DialogHeader>
        <form 
          className="space-y-5 mt-4" 
          onSubmit={(e) => { 
            e.preventDefault(); 
            onOpenChange(false); 
          }}
        >
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Work email</label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Company</label>
            <input
              type="text"
              placeholder="Your company name"
              className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-accent py-4 text-sm font-bold text-accent-foreground hover:bg-accent/90 transition-all shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Demo Request
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
