import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SchoolFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3"
    >
      {/* ITEM 1 */}
      <AccordionItem 
        value="item-1"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
         Is the Global Innovation Trek safe for my child?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Yes — safety is our top priority. Students travel with trained staff
          and follow a fully supervised schedule throughout the program.
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 2 */}
      <AccordionItem 
        value="item-2"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
          Who travels with the students?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Students are accompanied by experienced program leaders, coordinators,
          and trained chaperones from departure to return.
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 3 */}
      <AccordionItem 
        value="item-3"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
           What type of accommodation will students stay in?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Students stay in safe, modern, and fully supervised accommodations
          partnered with our organization.
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 4 */}
      <AccordionItem 
        value="item-4"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
         What will my child learn on this trip?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          The program teaches innovation, leadership, global exposure, and real-world problem-solving skills.
        </AccordionContent>
      </AccordionItem>

      {/* ITEM 5 */}
      <AccordionItem 
        value="item-5"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
         Does the program include visa and travel support?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Yes — we provide full visa guidance, travel coordination, and
          pre-departure support for all participants.
        </AccordionContent>
      </AccordionItem>
         {/* ITEM 6 */}
      <AccordionItem 
        value="item-5"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
         What happens after the trip?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Yes — we provide full visa guidance, travel coordination, and
          pre-departure support for all participants.
        </AccordionContent>
      </AccordionItem>
         {/* ITEM 7 */}
      <AccordionItem 
        value="item-5"
        className="bg-[#F2F2F2] rounded-xl px-5"
      >
        <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center">
         How can I apply or learn more?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Yes — we provide full visa guidance, travel coordination, and
          pre-departure support for all participants.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}
