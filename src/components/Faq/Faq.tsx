import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function Faq() {
  return (
    <>
      <div className="flex flex-col px-5 sm:px-20 py-10 font-poppins">
        <div className="text-[35px] leading-[48px] tracking-[-0.045em]">Frequently Asked Questions</div>
        <p className="text-[16px] leading-[24px] font-medium poppins tracking-[-0.045em] text-black/75 max-w-[800px] mt-5">Please carefully review the <a href='#' className="text-[#4286F3]">Coding Competitions Terms</a> and the <a href="" className="text-[#4286F3]"> Hashcode</a> Rules first, as many of your questions regarding eligibility, contest structure, prizes, grounds for disqualification, and more are addressed there.</p>
        <Accordion type="single" collapsible className='w-full md:w-5/6'>
          <List value='item-1' content='loremmmm' title='Overview' />
          <List value='item-2' content='loremmmm' title='Registering' />
          <List value='item-3' content='loremmmm' title='Coding' />
          <List value='item-4' content='loremmmm' title='Platform' />
        </Accordion>

      </div>
    </>
  )
}

export default Faq

const List = ({ title, content, value }: {
  title: string, content: string, value: string
}) => {
  return (
    <AccordionItem value={value} className="pr-14 md:pr-28">
      <AccordionTrigger className='text-gBlue'>{title}</AccordionTrigger>
      <AccordionContent>
        {content}
      </AccordionContent>
    </AccordionItem>
  )
}