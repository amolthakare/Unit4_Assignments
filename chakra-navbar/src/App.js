// import logo from './logo.svg';
import './App.css';
import {h1,Tooltip,Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
 Button} from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <div>
      <Popover>
        <PopoverTrigger>
          <Button backgroundColor={'white'} fontWeight={800}>Logo</Button>
        </PopoverTrigger>
      </Popover>
      
      {/* <Tooltip label="Explore Design Work" aria-label='A tooltip'>
        Inspiration
      </Tooltip>

      <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
        Find Work
      </Tooltip> */}

      <Popover>
        <PopoverTrigger>
          <Button backgroundColor={'white'}>Inspiration</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody fontWeight={600} marginBottom={-4} color={'grey'}>Explore Design Work</PopoverBody>
          <PopoverBody>Trending Design to inspire you</PopoverBody>
          <PopoverBody fontWeight={600} marginBottom={-4} color={'grey'}>New and Noteworthy</PopoverBody>
          <PopoverBody>Up and coming designers</PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button backgroundColor={'white'}>Find Work</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody fontWeight={600} marginBottom={-4} color={'grey'}>Job Board</PopoverBody>
          <PopoverBody>Find your dream design job</PopoverBody>
          <PopoverBody fontWeight={600} marginBottom={-4} color={'grey'}>Freelance Projects</PopoverBody>
          <PopoverBody>An exclusive list for contract work</PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button backgroundColor={'white'}>Learn Design</Button>
        </PopoverTrigger>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button backgroundColor={'white'}>Hire designers</Button>
        </PopoverTrigger>
      </Popover>
      </div>

      <div id="right">
      <Breadcrumb margin={1.5}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' color={'grey'}>Sign In</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Button colorScheme='pink'>Sign Up</Button>
      </div>


    </div>
  );
}

export default App;
