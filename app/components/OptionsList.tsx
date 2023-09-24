import { TQuestionCard } from "../interfaces/types";
import { OptionItem } from "./OptionItem";

export const OptionsList = ({ card }: { card: TQuestionCard }) => (
  <>
    <div>{card.question}</div>
    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {card.options.map((option, index) => (
        <OptionItem key={index} option={option} index={index}></OptionItem>
      ))}
    </ul>
  </>
);