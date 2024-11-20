import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavbarItems from "./NavbarItems";
import { ThemeToggle } from "./ThemeToggle";

const style = {
  ul: "flex flex-col gap-4",
  icon: "text-secondary w-5",
  link: "flex justify-between text-sm font-medium text-secondary-foreground hover:text-primary",
  drawer: {
    contentContainer: "mx-6 my-10 rounded-lg flex flex-col gap-10",
    title: "mb-4 font-semibold text-lg pb-2",
  },
};

function DrawerBar() {
  const drawer = style.drawer;

  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"secondary"} size={"icon"}>
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full mb-6 border-none">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Navigation Menu</DrawerTitle>
          </DrawerHeader>
          <div className={drawer.contentContainer}>
            <div>
              <h5 className={`${drawer.title} border-b-[0.6px]`}>App</h5>
              <NavbarItems style={style} itemsIndex={0} />
            </div>

            <details className="group w-full">
              <summary
                className={`${drawer.title} marker:content-none flex items-center gap-2 group-open:border-b-[0.6px]`}
              >
                <span>Demo</span>
                <ChevronDown className="text-secondary" />
              </summary>
              <NavbarItems itemsIndex={1} style={style} />
            </details>
          </div>
          <DrawerFooter className="mx-2 self-end">
            <ThemeToggle />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerBar;
