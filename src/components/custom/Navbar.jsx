"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { grantSpaceRequest, useStore } from "@/store/Store";

// TODO: ADD THE NAME OF THE PERSON REQUESTING THE SPACE ACCESS
const Navbar = () => {
  const [notifications] = useStore((state) => [state.notifications]);

  return (
    <section className="h-[5rem] sm:px-6 px-3 flex justify-between items-center text-black w-full sticky top-0 z-50 bg-white border-b border-[#5b58662d]">
      {/* search input */}
      <div class="relative text-gray-700">
        <div className="grid w-[25rem] items-center gap-1.5">
          <Input
            type="email"
            id="email"
            placeholder="Search spaces, files"
            className="pl-10 w-full bg-gray-100"
          />
        </div>
        <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center justify-between w-[14rem]">
        {/* notification icon */}
        <div className="w-[2.7rem] h-[2.7rem] inline-flex items-center justify-center p-1 rounded-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        {/* settings icon */}
        <div className="w-[2.7rem] h-[2.7rem] inline-flex items-center justify-center p-1 rounded-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* notification icon */}
        <div
          className={`w-[2rem] h-[2rem]  inline-flex items-center justify-center p-1 rounded-full relative ${
            notifications.length === 0
              ? "pointer-events-none"
              : "pointer-events-auto"
          }`}
        >
          <Dialog className="w-[40rem]">
            <DialogTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </DialogTrigger>
            <DialogContent className="top-9 right-0 translate-x-0 translate-y-0  max-w-[40rem]">
              <DialogHeader>
                <DialogTitle>
                  <h1 className="pb-[1.5rem]">Notifications</h1>
                </DialogTitle>
                <DialogDescription>
                  <div className="space-y-6 h-[25rem] overflow-y-auto sidebar">
                    {notifications.map((notification, index) => (
                      <div
                        className="flex justify-between items-center w-full"
                        key={index}
                      >
                        <div className="h-[2.7rem] w-[2.7rem] rounded-full overflow-hidden relative bg-black text-white inline-flex justify-center items-center">
                          <div>P</div>
                        </div>
                        <p className="text-base   flex-1 pl-3">
                          {notification.message}
                        </p>
                        {notification.notificationType === "requesting" && (
                          <div className="flex space-x-3">
                            <button
                              className="py-2 px-3 bg-teal-500 text-white rounded-lg text-base"
                              onClick={() =>
                                grantSpaceRequest(notification, "accepted")
                              }
                            >
                              Accept
                            </button>
                            <button
                              className="py-2 px-3 border border-black rounded-lg text-base"
                              onClick={() =>
                                grantSpaceRequest(notification, "denied")
                              }
                            >
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {notifications.length !== 0 && (
            <div className="bg-green-700 h-2 w-2 rounded-full  absolute top-0 -right-[0.10rem]" />
          )}
        </div>

        {/* profile */}
        <div className="hidden sm:flex items-center w-fit sm:space-x-6 space-x-3 py-1 px-1">
          {/* photo for desktop view */}
          {true ? (
            <div className="h-[2.7rem] w-[2.7rem] rounded-full overflow-hidden relative bg-black text-white inline-flex justify-center items-center">
              <div>PR</div>
            </div>
          ) : (
            <div className="h-[2.7rem] w-[2.7rem] rounded-full overflow-hidden relative">
              <Image
                className="object-cover w-full h-full"
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill
                alt=""
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
