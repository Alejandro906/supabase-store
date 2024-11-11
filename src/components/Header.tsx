import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">AmazonClone</h1>
          <div className="hidden md:flex flex-1 max-w-2xl">
            <Input
              className="w-full rounded-l-md rounded-r-none border-r-0"
              placeholder="Search products..."
            />
            <Button
              variant="secondary"
              size="icon"
              className="rounded-l-none bg-orange-500 hover:bg-orange-600"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart
          </Button>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}