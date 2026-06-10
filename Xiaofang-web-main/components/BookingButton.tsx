import Link from "next/link";
import { site } from "@/lib/site";

type BookingButtonProps = {
  className?: string;
  label?: string;
};

export function BookingButton({
  className = "button-primary",
  label = "Book an Appointment",
}: BookingButtonProps) {
  return (
    <Link href={site.bookingUrl} target="_blank" rel="noreferrer" className={className}>
      {label}
    </Link>
  );
}
