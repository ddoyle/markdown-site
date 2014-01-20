package MarkdownSite;
use Dancer2;

our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

for my $page (qw( index proofreading clients testimonials charges contact )) {
    get "/$page.htm" => sub {
        template $page;
    };
}

true;
