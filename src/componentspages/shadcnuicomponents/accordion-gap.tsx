import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function GapFaqs() {
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
          Who is the Gap Year Program designed for and why is this stage important?
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
          What do students do weekly during the program and where do activities happen?
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
           How does the program help students gain confidence and career clarity?
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
         Can a student join even if they already have plans for university?
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
         What do graduates of the Gap Year Program gain at the end?
        </AccordionTrigger>

        <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
          Yes — we provide full visa guidance, travel coordination, and
          pre-departure support for all participants.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  )
}
