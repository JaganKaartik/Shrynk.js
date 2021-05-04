import AnalyticsSVG from '../../../assets/images/analytics.svg';
import ShareSVG from '../../../assets/images/share.svg';

export const displayImage = (data) => {
  const Image = data === 'ANALYSE' ? AnalyticsSVG : ShareSVG;
  return (
    <div class=" transition duration-200 ease-in-out transform hover:scale-105 motion-reduce:transform-none max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 "
          src={Image}
          alt="loading..."
          style={{ maxWidth: '450px', margin: '5px auto 0' }}
        />
      </div>
      <div class="p-8">
        <p class="flex justify-center block mt-1 text-lg leading-tight font-medium  text-wrap">
          Create and share URLs to use Analytics.
        </p>
      </div>
    </div>
  );
};
