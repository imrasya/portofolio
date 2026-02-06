import Link from 'next/link';
import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { CornerBracket } from '@/components/ui/CornerBracket';

export default function Custom404() {
    return (
        <Layouts>
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Background Glitch Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none z-0">
                    <span className="text-[30vw] font-black text-foreground leading-none">404</span>
                </div>

                <div className="z-10 text-center max-w-2xl w-full">
                    <div className="neo-card bg-card p-8 md:p-12 relative rotate-1 hover:rotate-0 transition-transform duration-300 rounded-lg border-2 border-primary">
                        <CornerBracket position="top-left" size="w-6 h-6" />
                        <CornerBracket position="top-right" size="w-6 h-6" />
                        <CornerBracket position="bottom-left" size="w-6 h-6" />
                        <CornerBracket position="bottom-right" size="w-6 h-6" />

                        <div className="flex justify-center mb-6">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 animate-bounce">
                                <Image
                                    src="/images/profile/reze-melet.webp"
                                    alt="404 character"
                                    layout="fill"
                                    objectFit="contain"
                                    className="drop-shadow-neo"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h1 className="text-8xl md:text-9xl font-black text-primary mb-2 glitch-text relative inline-block">
                                404
                                <span className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70 animate-pulse">404</span>
                            </h1>
                            <div className="bg-foreground text-primary-dark font-mono font-bold py-1 px-4 inline-block transform -rotate-2">
                                SYSTEM ERROR :: PAGE NOT FOUND
                            </div>
                        </div>

                        <p className="text-lg md:text-xl font-medium text-muted-foreground mb-8 font-mono leading-relaxed">
                            The requested coordinates do not exist in this sector.
                            The file may have been moved, deleted, or consumed by the void.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link href="/" className="neo-brutal-button bg-primary text-white hover:bg-primary-dark w-full md:w-auto rounded-md py-3 px-8 font-black uppercase tracking-wider">
                                Return to Base
                            </Link>
                            <button onClick={() => window.history.back()} className="neo-brutal-button bg-secondary text-white hover:bg-secondary/90 w-full md:w-auto rounded-md py-3 px-8 font-black uppercase tracking-wider">
                                Go Back
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 font-mono text-xs text-primary/60">
                        ERROR_CODE: 0x404_NOT_FOUND // SYS.Reboot_Required(FALSE)
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
