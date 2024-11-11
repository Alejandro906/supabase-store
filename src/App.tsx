import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductDialog } from '@/components/ProductDialog';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { toast } = useToast();

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Fetch error:', error);
        throw error;
      }
      
      setProducts(data || []);
    } catch (error) {
      console.error('Fetch operation error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to fetch products"
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Products</h2>
          <Button onClick={() => setIsAddOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={fetchProducts}
              onUpdate={fetchProducts}
            />
          ))}
        </div>
      </main>
      <ProductDialog
        open={isAddOpen}
        onOpenChange={setIsAddOpen}
        onSuccess={fetchProducts}
      />
    </div>
  );
}

export default App;