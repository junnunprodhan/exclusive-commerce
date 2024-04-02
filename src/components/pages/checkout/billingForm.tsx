import TextInput from "@/components/global/textInput";

function BillingForm() {
  return (
    <>
      <li>
        <label className="text-sm text-gray-500">Full Name</label>
        <TextInput name="full-name" />
      </li>
      <li>
        <label className="text-sm text-gray-500">Company Name</label>
        <TextInput name="company-name" />
      </li>
      <li>
        <label className="text-sm text-gray-500">State Address</label>
        <TextInput name="address-1" />
      </li>
      <li>
        <label className="text-sm text-gray-500">
          Apartment, floor, etc {`(optional)`}
        </label>
        <TextInput name="address-2" />
      </li>
      <li>
        <label className="text-sm text-gray-500">Town/City</label>
        <TextInput name="town-city" />
      </li>
      <li>
        <label className="text-sm text-gray-500">Phone Number</label>
        <TextInput name="phone-number" />
      </li>
      {/* Check conformation for next time */}
      <li>
        <div className="flex cursor-pointer items-center mr-4">
          <input
            type="checkbox"
            className="accent-primary  w-4 h-4"
            id="red-checkbox"
          />

          <label
            htmlFor="red-checkbox"
            className="ml-2  text-gray-900 dark:text-gray-300"
          >
            Save this information for faster check-out next time
          </label>
        </div>
      </li>
    </>
  );
}

export default BillingForm;
