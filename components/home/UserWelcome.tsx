import { fakeUser } from '@/lib/fakeUser'

function UserWelcome() {
    return (
        <div>
            <h1 className='text-4xl font-bold mb-2'>Welcome back,<span className='ml-2'>{fakeUser.firstName}</span>!</h1>
            <p>
                Here's what's happening at a glance:
            </p>
        </div>
    )
}

export default UserWelcome