import { fakeUser } from '@/lib/fakeUser'

function UserWelcome() {
    return (
        <section aria-label="User Welcome">
            <h1 className='text-4xl text-black dark:text-white font-bold mb-2 '>Welcome back,<span className='ml-2'>{fakeUser.firstName}</span>!</h1>
            <p className='text-slate-600 dark:text-slate-400'>
                Here's what's happening at a glance:
            </p>
        </section>
    )
}

export default UserWelcome