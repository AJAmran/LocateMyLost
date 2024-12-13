import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-cover bg-center bg-[url('/glass.jpg')]">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            type="text"
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search......"
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-600" />
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
