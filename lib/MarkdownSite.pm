package MarkdownSite;
use Dancer2;

our $VERSION = '0.1';

my $template_data = {
    project_name => 'My Project',
};

get '/' => sub {
    template 'index', $template_data;
};

for my $page (qw( index proofreading clients testimonials charges contact )) {
    get "/$page.htm" => sub {
        template $page, $template_data;
    };
}

true;
