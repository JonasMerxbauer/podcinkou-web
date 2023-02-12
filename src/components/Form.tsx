import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="firstName"
            className={
              "block text-sm font-medium text-zinc-700" +
              (errors.firstName ? " text-red-500" : "")
            }
          >
            Jméno
          </label>
          <span
            id="firstName-description"
            className={
              "text-sm text-zinc-500" +
              (errors.firstName ? " text-red-500" : "")
            }
          >
            Povinné
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            id="firstName"
            autoComplete="given-name"
            {...register("firstName", { required: true })}
            className={
              "block w-full rounded-md border-zinc-300 shadow-sm sm:text-sm" +
              (errors.firstName
                ? " border-red-500 focus:border-red-500 focus:ring-red-500"
                : "")
            }
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="lastName"
            className={
              "block text-sm font-medium text-zinc-700" +
              (errors.lastName ? " text-red-500" : "")
            }
          >
            Příjmení
          </label>
          <span
            id="lastName-description"
            className={
              "text-sm text-zinc-500" + (errors.lastName ? " text-red-500" : "")
            }
          >
            Povinné
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            {...register("lastName", { required: true })}
            id="lastName"
            autoComplete="family-name"
            className={
              "block w-full rounded-md border-zinc-300 shadow-sm sm:text-sm" +
              (errors.lastName
                ? " border-red-500 focus:border-red-500 focus:ring-red-500"
                : "")
            }
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="email"
            className={
              "block text-sm font-medium text-zinc-700" +
              (errors.email ? " text-red-500" : "")
            }
          >
            Email
          </label>
          <span
            id="email-description"
            className={
              "text-sm text-zinc-500" + (errors.email ? " text-red-500" : "")
            }
          >
            Povinné
          </span>
        </div>
        <div className="mt-1">
          <input
            id="email"
            {...register("email", { required: true })}
            type="email"
            autoComplete="email"
            className={
              "block w-full rounded-md border-zinc-300 shadow-sm sm:text-sm" +
              (errors.email
                ? " border-red-500 focus:border-red-500 focus:ring-red-500"
                : "")
            }
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-zinc-700"
        >
          Telefon
        </label>
        <div className="mt-1">
          <input
            type="text"
            {...register("phone")}
            id="phone"
            autoComplete="tel"
            aria-describedby="phone-description"
            className="block w-full rounded-md border-zinc-300 shadow-sm sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="message"
            className={
              "block text-sm font-medium text-zinc-700" +
              (errors.message ? " text-red-500" : "")
            }
          >
            Zpráva
          </label>
          <span
            id="message-description"
            className={
              "text-sm text-zinc-500" +
              (errors.message?.type === "maxLength"
                ? " font-bold text-red-500"
                : "")
            }
          >
            Maximálně 500 znaků
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            {...register("message", { required: true, maxLength: 500 })}
            aria-describedby="message-description"
            rows={4}
            className={
              "block w-full rounded-md border-zinc-300 shadow-sm sm:text-sm" +
              (errors.message
                ? " border-red-500 focus:border-red-500 focus:ring-red-500"
                : "")
            }
          ></textarea>
        </div>
      </div>
      <div className="sm:col-span-2">
        <input
          type="submit"
          value="Poslat zprávu"
          className="inline-flex w-full justify-center rounded-md border-zinc-300 border-transparent bg-white py-2 px-4 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
        />
      </div>
    </form>
  );
};

export default Form;
