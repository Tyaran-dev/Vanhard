import { useTranslations, useLocale } from "next-intl";

const ControlFreedomSection = () => {
  const t = useTranslations('ControlFreedomSection');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section
      style={{ backgroundImage: `url(/images/freedom.jpg)` }}
      className="relative flex items-center justify-center bg-no-repeat bg-cover bg-fixed"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Full Control Section */}
          <div className={`flex flex-col justify-center space-y-6 p-8 lg:p-12 rounded-lg bg-blur bg-gray/20 backdrop-blur-lg h-full ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <div>
              <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-none ${isRTL ? 'font-almarai' : 'font-antonio'}`}>
                {t('control.title')}
              </h2>
              <p className={`text-lg font-medium text-white/80 tracking-wider uppercase ${isRTL ? 'font-almarai' : 'font-antonio'}`}>
                {t('control.subtitle')}
              </p>
            </div>
            <p className={`text-base md:text-xl text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0 ${isRTL ? 'font-almarai text-right' : 'font-antonio text-center'}`}>
              {t('control.description')}
            </p>
          </div>

          {/* Full Freedom Section */}
          <div className={`flex flex-col justify-center space-y-6 p-8 lg:p-12 rounded-lg bg-blur bg-gray/20 backdrop-blur-lg h-full ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <div>
              <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-none ${isRTL ? 'font-almarai' : 'font-antonio'}`}>
                {t('freedom.title')}
              </h2>
              <p className={`text-lg font-medium text-white/80 tracking-wider uppercase ${isRTL ? 'font-almarai' : 'font-antonio'}`}>
                {t('freedom.subtitle')}
              </p>
            </div>
            <p className={`md:text-xl text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0 ${isRTL ? 'font-almarai text-right' : 'font-antonio text-center'}`}>
              {t('freedom.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element - Flip position for RTL */}
      <div className={`absolute top-20 w-4 h-4 rounded-full bg-primary opacity-60 animate-pulse hidden lg:block ${isRTL ? 'left-20' : 'right-20'}`}></div>
    </section>
  );
};

export default ControlFreedomSection;