import AnalyticsSVG from '../../../assets/images/analytics.svg';
import ShareSVG from '../../../assets/images/share.svg';

export const displayImage = (data) => {
  const display =
    data === 'ANALYSE'
      ? {
          image: AnalyticsSVG,
          message: 'Create and share URLs to use Analytics',
        }
      : { image: ShareSVG, message: 'Share your URLs!' };
  return (
    <div class=" transition duration-200 ease-in-out transform hover:scale-105 motion-reduce:transform-none mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 "
          src={display.image}
          alt="loading..."
          style={{ maxWidth: '450px', margin: '5px auto 0' }}
        />
      </div>
      <div class="p-8">
        <p class="flex justify-center block mt-1 text-lg leading-tight font-medium ">
          {display.message}
        </p>
      </div>
    </div>
  );
};
