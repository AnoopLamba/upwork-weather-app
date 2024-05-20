import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";
import { DownIcon } from "./common/Icon";
import { weekDays } from "./common/Helper";

export default function WeekdayListBox({ selectedDay, setSelectedDay }) {
  return (
    <div className="mx-auto w-52">
      <Listbox value={selectedDay} onChange={setSelectedDay}>
        <ListboxButton
          className={clsx(
            "relative w-full flex items-center justify-between rounded-lg bg-red-500 py-1.5 px-3 text-left text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {selectedDay.name}
          <div>
            <DownIcon />
          </div>
        </ListboxButton>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            anchor="bottom"
            className="w-[var(--button-width)] rounded-xl border border-white/5 bg-pink-400 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            {weekDays.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <div className="text-sm/6 text-white">{person.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
}
