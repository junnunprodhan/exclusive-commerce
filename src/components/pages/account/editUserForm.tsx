"use client";
import { CircleSpinner } from "@/components/assets/globalIcons";
import TextInput from "@/components/global/textInput";
import { useGetProfileQuery, usePutProfileMutation } from "@/slices/userSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function EditUserForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    phone: "",
  });
  const { data, isLoading } = useGetProfileQuery(undefined);

  useEffect(() => {
    if (data) {
      setFormData((s) => ({
        ...s,
        name: data.name || "",
        email: data.email || "",
        address: data.address || "",
        phone: data.phone || "",
      }));
    }
  }, [data]);

  const [updateProfile, response] = usePutProfileMutation();

  // Error Toast
  useEffect(() => {
    if (response.error) {
      toast.error("Invalid form data !");
    }
    if (response.isSuccess) {
      toast.success("Updated successfully !", {
        autoClose: 6000,
      });
    }
  }, [response]);

  function submitForm() {
    console.log(formData);
    updateProfile(formData);
  }

  return (
    <div className="shadow p-10  rounded-md">
      <div className="flex items-center gap-2">
        <h2 className="text-primary font-medium">Edit Your Profile</h2>
        {isLoading && (
          <div className="flex justify-center items-center gap-2">
            <span className="w-4 h-4  flex">
              <CircleSpinner />
            </span>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-2">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xs">
            Full Name <span className="text-primary">*</span>
          </h2>
          <TextInput
            value={formData.name}
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, name: target.value }))
            }
            name="my_name"
            placeholder="Your name"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xs">
            Email Address <span className="text-primary">*</span>
          </h2>
          <TextInput
            value={formData.email}
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, email: target.value }))
            }
            name="my_email"
            placeholder="Your Email"
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xs">
            Phone Number <span className="text-primary">*</span>
          </h2>
          <TextInput
            value={formData.phone}
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, phone: target.value }))
            }
            name="my_phone"
            placeholder="Your Phone"
          />
        </div>
        {/* Address */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xs">Address</h2>
          <TextInput
            value={formData.address}
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, address: target.value }))
            }
            name="my_address"
            placeholder="Your Address"
          />
        </div>
        {/* Password */}
        {data?.emptyPassword && (
          <div className="flex flex-col gap-1">
            <h2 className="text-xs">
              Password <span className="text-primary">*</span>
            </h2>
            <TextInput
              value={formData.password}
              onChange={({ target }) =>
                setFormData((s) => ({ ...s, password: target.value }))
              }
              name="my_password"
              placeholder="Add password"
            />
          </div>
        )}
      </div>
      <div className="flex justify-end items-center gap-5 py-5">
        <button className="text-black border border-gray-300 bg-white md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none">
          Discard
        </button>
        <button
          // {...props}
          type="button"
          onClick={submitForm}
          className="text-white border border-gray-300 bg-primary md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none"
        >
          {response.isLoading ? (
            <div className="flex justify-center items-center gap-2">
              <span className="w-4 h-4  flex">
                <CircleSpinner />
              </span>
              <span> Saving...</span>
            </div>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </div>
  );
}

export default EditUserForm;
