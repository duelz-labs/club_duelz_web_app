import Verification from '../components/verification'

function page() {
    return (
        <div className='container relative flex h-screen w-screen flex-col items-center justify-center'>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <Verification />
            </div>
        </div>
    )
}

export default page